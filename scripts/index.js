//signup form JS

//find the buttons inputs etc
const signupButton = document.querySelector('.sub-button')
const modalMask = document.querySelector('.modal-mask');
const signupModal = document.querySelector('.signup-modal')
const closeButton = document.querySelector('.x-button')
const emailInput = document.querySelector('#emailInput')
const submitButton = document.querySelector('#subscribe-submit-button')
  
// Function to open the modal, change display so its visible
function openModal() {
    modalMask.style.display = 'block'
    signupModal.style.display = 'flex'
}
  
// Function to close the modal, change displays back to none
function closeModal() {
    modalMask.style.display = 'none'
    signupModal.style.display = 'none'
}
  
// Function to handle email submission
    function submitEmail() {
    const userEmail = emailInput.value
  
    if (!userEmail) {
        alert('Please enter your email.')
        return
    }
  
    console.log(`Submitted email: ${userEmail}`)
        alert(`Thanks for subscribing!`)
        closeModal()
    }
  
// listener to open modal when signup button is clicked
signupButton.addEventListener('click', openModal)
  
// Event listener to close modal when X button is clicked
closeButton.addEventListener('click', closeModal)
  
// Event listener to handle email submission when "Subscribe" button is clicked
submitButton.addEventListener('click', submitEmail)