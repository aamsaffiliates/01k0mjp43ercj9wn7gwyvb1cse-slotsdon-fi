// JavaScript for SlotsDon Casino

// Declare Lucide Icons variable
let lucide

// Initialize Lucide Icons
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }

  // Game card hover effects (already handled by CSS, but can add additional JS if needed)
  const gameCards = document.querySelectorAll(".game-card")

  gameCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Button click handlers
  const signUpButtons = document.querySelectorAll("button")

  signUpButtons.forEach((button) => {
    if (button.textContent.includes("Sign Up")) {
      button.addEventListener("click", () => {
        // Add sign up functionality here
        alert("Sign Up functionality would be implemented here")
      })
    }

    if (button.textContent.includes("Login")) {
      button.addEventListener("click", () => {
        // Add login functionality here
        alert("Login functionality would be implemented here")
      })
    }

    if (button.textContent.includes("Play Now")) {
      button.addEventListener("click", () => {
        // Add game launch functionality here
        alert("Game would launch here")
      })
    }
  })

  // Redirect to /play on .action-btn click
  const actionButtons = document.querySelectorAll('.action-btn')
  actionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = '/play'
    })
  })

  // Lazy loading for images
  const images = document.querySelectorAll("img")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.style.opacity = "1"
        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => {
    imageObserver.observe(img)
  })

  // Add loading states for buttons
  function addLoadingState(button) {
    const originalText = button.textContent
    button.textContent = "Loading..."
    button.disabled = true

    setTimeout(() => {
      button.textContent = originalText
      button.disabled = false
    }, 2000)
  }

  // Table responsive handling
  const tables = document.querySelectorAll("table")

  tables.forEach((table) => {
    const wrapper = table.parentElement
    if (wrapper.classList.contains("overflow-x-auto")) {
      // Add scroll indicators if needed
      wrapper.addEventListener("scroll", function () {
        if (this.scrollLeft > 0) {
          this.classList.add("scrolled")
        } else {
          this.classList.remove("scrolled")
        }
      })
    }
  })

  // Form validation (for future forms)
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Accessibility improvements
  document.addEventListener("keydown", (e) => {
    // ESC key to close modals (for future implementation)
    if (e.key === "Escape") {
      // Close any open modals
    }

    // Tab navigation improvements
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation")
    }
  })

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-navigation")
  })

  // Performance monitoring
  window.addEventListener("load", () => {
    console.log("SlotsDon Casino loaded successfully")

    // Track page load time
    const loadTime = performance.now()
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`)
  })
})

// Utility functions
function formatCurrency(amount, currency = "EUR") {
  return new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: currency,
  }).format(amount)
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Export functions for potential module use
window.SlotsDon = {
  formatCurrency,
  debounce,
  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  },
}
