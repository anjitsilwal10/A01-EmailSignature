document.getElementById('signatureform').addEventListener('input', function() {
    var name = document.getElementById('name').value;
    var designation = document.getElementById('designation').value;
    var facebooklink = document.getElementById('facebooklink').value;
    // Get values of other fields
    
    // Update the HTML in the preview area
    document.getElementById('previewArea').innerHTML = `
    <!-- Your HTML template here, with variables inserted -->
   <div class = "output">
    <h2>${name}</h2>
    <h2>
    <i>${designation}</i>
    </h2>
    <h2>${facebooklink}</h2>
   </div>
    
    `;
});
