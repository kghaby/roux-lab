/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

// Supports weights 200-900
import "@fontsource-variable/crimson-pro";
import '@fontsource-variable/crimson-pro/wght-italic.css';

// Supports weights 300-700
import '@fontsource-variable/fira-code';

// export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
//     // window.history.scrollRestoration = 'manual';
//     const htmlElement = document.documentElement;
//     const currentPosition = getSavedScrollPosition(location, location.key);

//     htmlElement.style.scrollBehavior = 'auto';

//     if (!currentPosition) {
//         window.scrollTo(0, 0);
//     } else {
//         window.setTimeout(() => {
//             window.requestAnimationFrame(() => {
//                 window.scrollTo(...currentPosition);
//                 htmlElement.style.scrollBehavior = 'smooth';
//             });
//         }, 0);
        
//     }

    

//     return false;
// };

// This is combination with forced scroll on initial load fixes mobile chrome scroll issue
export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
    // window.history.scrollRestoration = 'manual';
    const htmlElement = document.documentElement;
    const currentPosition = getSavedScrollPosition(location, location.key);

    if (!currentPosition) {
        window.scrollTo(0, 0);
    } else {
        setTimeout(() => {
        window.requestAnimationFrame(() => {
            htmlElement.style.scrollBehavior = 'auto'; // Don't scroll on refresh
            window.scrollTo(...currentPosition);
            htmlElement.style.scrollBehavior = 'smooth';
        });
        }, 0);
    }
    return false;
};
