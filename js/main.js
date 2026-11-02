document.addEventListener('DOMContentLoaded', () => {
    const enquiryForm = document.getElementById('enquiryForm');
    const productSelect = document.getElementById('productSelect');
    const quantityInput = document.getElementById('quantityInput');
    const costCalculationBox = document.getElementById('costCalculationBox');
    const enquirySuccessMessage = document.getElementById('enquirySuccessMessage');

    // Check if we are currently on the enquiry page
    if (productSelect && quantityInput && costCalculationBox) {
        // Function to calculate and display the cost
        function calculateTotalCost() {
            const selectedOption = productSelect.options[productSelect.selectedIndex];
            const pricePerItem = parseFloat(selectedOption.getAttribute('data-price')) || 0;
            const quantity = parseInt(quantityInput.value) || 0;
            const totalCost = pricePerItem * quantity;

            if (totalCost > 0) {
                costCalculationBox.textContent = `Estimated Total: $${totalCost.toFixed(2)}`;
                costCalculationBox.style.backgroundColor = '#eaf4ec'; // Light green background for positive cost
                costCalculationBox.style.color = '#2e7d32'; 
            } else {
                costCalculationBox.textContent = 'Estimated Total: R 0.00';
                costCalculationBox.style.backgroundColor = '#f0f0f0'; // Neutral background for zero cost
                costCalculationBox.style.color = '#3d405b';
                
            }
        }

        productSelect.addEventListener('change', calculateTotalCost);
        quantityInput.addEventListener('input', calculateTotalCost);

        enquiryForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            if (productSelect.value === '0') {
                alert('Please select a valid product.');
                return;
            }

            const clientName = document.getElementById('clientName').value;

            enquirySuccessMessage.innerHTML = `Thank you, ${clientName}, for your enquiry! We will get back to you shortly.`;
            enquirySuccessMessage.style.display = 'block';

            enquiryForm.reset(); // Reset the form fields
            calculateTotalCost(); // Reset the cost calculation box
        });
    }
});

