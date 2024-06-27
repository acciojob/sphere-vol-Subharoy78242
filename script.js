function volume_sphere(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Get the radius value from the input field
    const radius = parseFloat(document.getElementById('radius').value);
    
    // Calculate the volume of the sphere
    let volume;
    if (isNaN(radius) || radius < 0) {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4); // Round to 4 decimal places
    }
    
    // Display the calculated volume in the output field
    document.getElementById('volume').value = volume;
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};