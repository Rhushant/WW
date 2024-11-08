function calculateFee() {
    const program = document.getElementById('program').value;
    const credits = parseInt(document.getElementById('credits').value, 10);

    if (isNaN(credits) || credits < 0) {
        document.getElementById('fee-result').innerText = "Please enter a valid number of credits.";
        return;
    }

    let feePerCredit = program === 'undergrad' ? 100 : 200;
    let totalFee = credits * feePerCredit;
    document.getElementById('fee-result').innerText = `Total Fee: $${totalFee}`;
}


function loadHeader() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok for header.");
            return response.text();
        })
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}


function loadFooter() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok for footer.");
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});
