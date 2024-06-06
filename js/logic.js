const themeTogglerBtn = $('#theme-toggler');

const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

function updateThemeTogglerIcon() {
    const THEME_ICONS = {
        [THEMES.LIGHT]: '🌞',
        [THEMES.DARK]: '🌙'
    };


    const currentTheme = $('html').attr('data-theme');
    const icon = THEME_ICONS[currentTheme];
    themeTogglerBtn.text(icon);
}


themeTogglerBtn.on('click', () => {
 
    const currentTheme = $('html').attr('data-theme');

    const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;


    $('html').attr('data-theme', newTheme);
    // Save the new chosen theme to localStorage so that it can be presisted
    localStorage.setItem('theme', newTheme);

    updateThemeTogglerIcon();
});

// above line is heavily copied from the cu module 5 using jquery 


function loadTheme() {
    const getValidTheme = (theme) => {
        // If the theme is valid, return it
        if ([THEMES.LIGHT, THEMES.DARK].includes(theme)) {
            return theme;
        }
    
        // Check if matchMedia is supported
        if (!window.matchMedia) {
            // If it's not supported, default to dark theme
            return THEMES.DARK;
        }

        // Try to get the preferred theme from the system
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        return systemPrefersLight ? THEMES.LIGHT : THEMES.DARK;
    }

    // Check localStorage for what our previous theme was
    // If the localStorage theme was not valid, we'll default to the system preference
    const theme = getValidTheme(localStorage.getItem("theme"));
    
    $('html').attr('data-theme', theme);
    updateThemeTogglerIcon();
}

loadTheme();