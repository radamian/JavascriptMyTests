document.addEventListener('DOMContentLoaded', function () {
    // Get gender checkboxes
    const maleCheckbox = document.getElementById('male');
    const femaleCheckbox = document.getElementById('female');
    const unknownCheckbox = document.getElementById('unknown');

    // Add event listeners to each checkbox
    maleCheckbox.addEventListener('change', function () {
        if (maleCheckbox.checked) {
            femaleCheckbox.checked = false;
            unknownCheckbox.checked = false;
        }
    });

    femaleCheckbox.addEventListener('change', function () {
        if (femaleCheckbox.checked) {
            maleCheckbox.checked = false;
            unknownCheckbox.checked = false;
        }
    });

    unknownCheckbox.addEventListener('change', function () {
        if (unknownCheckbox.checked) {
            maleCheckbox.checked = false;
            femaleCheckbox.checked = false;
        }
    });
});
