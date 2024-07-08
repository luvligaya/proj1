document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const captionInput = document.getElementById('captionInput');
    const content = document.getElementById('content');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const contentItem = document.createElement('div');
            contentItem.className = 'content-item';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Photo';

            const caption = document.createElement('p');
            caption.innerText = captionInput.value;

            contentItem.appendChild(img);
            contentItem.appendChild(caption);

            content.appendChild(contentItem);
        }

        reader.readAsDataURL(fileInput.files[0]);
    }
});
