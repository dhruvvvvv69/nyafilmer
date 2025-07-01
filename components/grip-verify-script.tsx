"use client"

import { useEffect } from 'react'

export function GripVerifyScript() {
  useEffect(() => {
    console.log('🟡 Starting GripVerify integration')
    
    // Store the original page content
    const originalBodyContent = document.body.innerHTML
    
    // Override document.write to handle the script's content generation
    const originalWrite = document.write
    const originalWriteln = document.writeln
    
    document.write = function(content) {
      if (content && content.trim()) {
        console.log('📝 Processing document.write content')
        
        // Create a temporary container
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = content
        
        // Execute any scripts in the content
        const scripts = tempDiv.querySelectorAll('script')
        scripts.forEach(oldScript => {
          const newScript = document.createElement('script')
          if (oldScript.src) {
            newScript.src = oldScript.src
            newScript.async = true
          } else {
            newScript.textContent = oldScript.textContent
          }
          document.head.appendChild(newScript)
        })
        
        // Add non-script content to body - let it display naturally
        const nonScriptElements = Array.from(tempDiv.children).filter(el => el.tagName !== 'SCRIPT')
        nonScriptElements.forEach(el => {
          document.body.appendChild(el)
        })
        
        // Also add any text nodes or other content
        Array.from(tempDiv.childNodes).forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
            document.body.appendChild(node.cloneNode(true))
          }
        })
      }
    }
    
    document.writeln = function(content) {
      document.write(content + '\n')
    }
    
    // Monitor for when verification content appears
    const monitorForVerification = () => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            // Check for verification elements
            const verificationElements = document.querySelectorAll(
              '[id*="hmhhql4z36"], [id*="InlineBox"], [class*="colorbox"], [id*="j221y9g"]'
            )
            
            if (verificationElements.length > 0) {
              console.log('✅ Verification popup appeared!')
              
              // Let the popup work naturally - don't interfere with sizing
              verificationElements.forEach(element => {
                const htmlElement = element as HTMLElement
                // Remove any max-width/height restrictions that might be cutting it
                if (htmlElement.style.maxWidth) htmlElement.style.maxWidth = 'none'
                if (htmlElement.style.maxHeight) htmlElement.style.maxHeight = 'none'
                
                // Ensure it's properly positioned
                if (htmlElement.style.position === 'fixed' || htmlElement.style.position === 'absolute') {
                  console.log('📐 Ensuring popup displays at full size')
                }
              })
            }
          }
        })
      })
      
      observer.observe(document.body, { 
        childList: true, 
        subtree: true 
      })
      
      return observer
    }
    
    // Load the script
    const loadScript = () => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://gripverify.com/script_include.php?id=1821797'
      script.async = false // Important for document.write to work
      
      script.onload = () => {
        console.log('🟢 GripVerify script loaded')
        
        // Give time for the script to execute and show popup
        setTimeout(() => {
          const verificationElements = document.querySelectorAll(
            '[id*="hmhhql4z36"], [id*="InlineBox"], [class*="colorbox"]'
          )
          if (verificationElements.length > 0) {
            console.log('📋 Verification elements found:', verificationElements.length)
          } else {
            console.log('⚠️ No verification elements detected yet')
          }
        }, 2000)
      }
      
      script.onerror = () => {
        console.error('🔴 Failed to load GripVerify script')
      }
      
      document.head.appendChild(script)
      return script
    }
    
    // Set up monitoring and load script
    const observer = monitorForVerification()
    const script = loadScript()
    
    // Cleanup function
    return () => {
      // Restore original document.write
      document.write = originalWrite
      document.writeln = originalWriteln
      
      if (observer) {
        observer.disconnect()
      }
      
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
} 