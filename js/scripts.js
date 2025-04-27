// Scroll animation for smooth navigation
when navigation link clicked:
    prevent default action
    smoothly scroll to selected page section


<script>
function togglePDF(pdfId) {
    const pdf = document.getElementById(pdfId);
    if (pdf.style.display === "none") {
        pdf.style.display = "block";  // Unfold (show) PDF
    } else {
        pdf.style.display = "none";   // Fold (hide) PDF
    }
}
</script>
