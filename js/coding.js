document.addEventListener('DOMContentLoaded', function () {
    const codingArea = document.getElementById('codingArea');
    if (codingArea) {
        codingArea.innerHTML = `
            <p>Use this section to solve coding challenges and track your progress.</p>
            <ul>
                <li>Review sample problems.</li>
                <li>Submit code in your local editor.</li>
                <li>Return here for curated practice.</li>
            </ul>
        `;
    }
});
