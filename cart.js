 document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.quantity-input');
                let value = parseInt(input.value);
                
                if (this.textContent === '+' && value < 10) {
                    input.value = value + 1;
                } else if (this.textContent === '-' && value > 1) {
                    input.value = value - 1;
                }
                
            });
        });

        document.querySelectorAll('.action-btn').forEach(button => {
            if (button.textContent === 'Remove') {
                button.addEventListener('click', function() {
                    const item = this.closest('.cart-item');
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.remove();
                    }, 300);
                });
            }
        });