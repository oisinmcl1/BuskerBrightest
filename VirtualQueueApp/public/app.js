// JavaScript for Bar/Restaurant App

document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const loginForm = document.getElementById('login-form');
    const queueStatusButton = document.getElementById('queue-status-button');
    const enterButton = document.getElementById('enter-button');
    const menuItems = document.querySelectorAll('.menu-item button');
    const orderForm = document.getElementById('order-form');

    // Event listeners
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Perform login logic (redirect to the queue status page for now)
            window.location.href = 'queue-status.html';
        });
    }

    if (queueStatusButton) {
        queueStatusButton.addEventListener('click', function () {
            // Redirect to queue status page
            window.location.href = 'queue-status.html';
        });
    }

    if (enterButton) {
        enterButton.addEventListener('click', function () {
            // Redirect to entry notification page
            window.location.href = 'entry-notification.html';
        });
    }

    if (menuItems) {
        menuItems.forEach(function (button) {
            button.addEventListener('click', function () {
                // Redirect to order page
                window.location.href = 'order.html';
            });
        });
    }

    if (orderForm) {
        orderForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Perform order confirmation logic (redirect to order confirmation page for now)
            window.location.href = 'order-confirmation.html';
        });
    }
});
