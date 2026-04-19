document.addEventListener('DOMContentLoaded', () => {
    // Navigation and View Switching Logic
    const navItems = document.querySelectorAll('.nav-item');
    const dashboardView = document.getElementById('dashboard-view');
    const settingsView = document.getElementById('settings-view');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked
            item.classList.add('active');
            
            // View switching
            if (item.id === 'nav-settings') {
                dashboardView.style.display = 'none';
                settingsView.style.display = 'block';
                // Trigger animation
                const settingsGrid = document.querySelector('.settings-grid');
                if(settingsGrid) {
                    settingsGrid.style.animation = 'none';
                    setTimeout(() => {
                        settingsGrid.style.animation = 'fadeInUp 0.8s ease-out';
                    }, 10);
                }
            } else {
                settingsView.style.display = 'none';
                dashboardView.style.display = 'block';
                
                const pageTitle = document.getElementById('page-title');
                pageTitle.textContent = item.textContent.trim();
                
                // Small animation effect on content
                const grid = document.querySelector('.dashboard-grid');
                if(grid) {
                    grid.style.animation = 'none';
                    setTimeout(() => {
                        grid.style.animation = 'fadeInUp 0.8s ease-out';
                    }, 10);
                }
            }
        });
    });

    // Chart period change interaction
    const chartPeriod = document.getElementById('chart-period');
    if (chartPeriod) {
        chartPeriod.addEventListener('change', (e) => {
            const chartLine = document.querySelector('.chart-line');
            const chartArea = document.querySelector('.chart-area');
            
            // Retrigger animation
            chartLine.style.animation = 'none';
            chartArea.style.animation = 'none';
            
            // Randomize the chart line slightly for effect
            setTimeout(() => {
                chartLine.style.animation = 'drawLine 1.5s ease-out forwards';
                chartArea.style.animation = 'revealRight 1.5s ease-out forwards';
                
                if(e.target.value === '7d') {
                    chartLine.setAttribute('d', 'M0,120 Q20,100 40,110 T80,70 T120,90 T160,50 T200,80 T240,40 T280,60 T320,30 T360,50 T400,20');
                    chartArea.setAttribute('d', 'M0,150 L0,120 Q20,100 40,110 T80,70 T120,90 T160,50 T200,80 T240,40 T280,60 T320,30 T360,50 T400,20 L400,150 Z');
                } else if (e.target.value === '1y') {
                    chartLine.setAttribute('d', 'M0,80 Q20,60 40,90 T80,110 T120,70 T160,100 T200,60 T240,50 T280,80 T320,40 T360,70 T400,30');
                    chartArea.setAttribute('d', 'M0,150 L0,80 Q20,60 40,90 T80,110 T120,70 T160,100 T200,60 T240,50 T280,80 T320,40 T360,70 T400,30 L400,150 Z');
                } else {
                    chartLine.setAttribute('d', 'M0,100 Q20,120 40,90 T80,80 T120,60 T160,110 T200,40 T240,70 T280,30 T320,60 T360,20 T400,40');
                    chartArea.setAttribute('d', 'M0,150 L0,100 Q20,120 40,90 T80,80 T120,60 T160,110 T200,40 T240,70 T280,30 T320,60 T360,20 T400,40 L400,150 Z');
                }
            }, 50);
        });
    }
    
    // Quick actions interactive feedback
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-4px)';
            }, 150);
        });
    });

    // Settings: Profile Name Management
    const saveProfileBtn = document.getElementById('btn-save-profile');
    const profileNameInput = document.getElementById('profile-name-input');
    const displayNames = document.querySelectorAll('.user-info .name');
    const avatarInitials = document.querySelector('.avatar');

    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', () => {
            const newName = profileNameInput.value.trim();
            if (newName) {
                // Update display names
                displayNames.forEach(el => el.textContent = newName);
                
                // Update avatar initials
                const initials = newName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                if (avatarInitials) avatarInitials.textContent = initials;
                
                // Visual feedback for save
                const originalText = saveProfileBtn.textContent;
                saveProfileBtn.textContent = 'Saved!';
                saveProfileBtn.style.background = 'var(--success)';
                
                setTimeout(() => {
                    saveProfileBtn.textContent = originalText;
                    saveProfileBtn.style.background = ''; // restore original background
                }, 2000);
            }
        });
    }

    // Settings: Accent Color Management
    const colorBtns = document.querySelectorAll('.color-btn');
    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active class
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Set CSS variable
            const selectedColor = btn.getAttribute('data-color');
            document.documentElement.style.setProperty('--accent-color', selectedColor);
            
            // Also update the glow if we want
            // Convert hex to rgb for rgba
            const hex = selectedColor.replace('#', '');
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            document.documentElement.style.setProperty('--accent-glow', `rgba(${r}, ${g}, ${b}, 0.5)`);
        });
    });

    // Settings: Theme Management
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            const theme = e.target.value;
            // Clear existing theme classes
            document.body.classList.remove('theme-obsidian', 'theme-slate');
            
            // Add new theme class if not default
            if (theme !== 'default') {
                document.body.classList.add(`theme-${theme}`);
            }
        });
    }
});
