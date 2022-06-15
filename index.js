const main =  {

    convertToSnakeCase(text) {
        if(text.includes('_')) {
            return text.toLowerCase()
        } else if(text.includes('-')) {
            return text.toLowerCase().replace(/-/g, '_')
        } else if(text.includes(' ')) {
            return text.toLowerCase().replace(/ /g, '_')
        } else {
            let newText = '';
            text.split('').forEach((letter, letterIdx) => {
                if(letterIdx === 0) {
                    newText += letter.toLowerCase();
                } else {
                    const isUppercase = letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
                    if(isUppercase)
                        newText += '_';
                    newText += letter.toLowerCase();
                }
            })
            return newText
        }
    },

    convertToCamelCase(text) {
        let newText = '';
        let nextConvertToCamelCase = false;
        text.split('').forEach((letter, letterIdx) => {
            if(letterIdx === 0) {
                newText += letter.toLowerCase();
            } else {
                if(nextConvertToCamelCase) {
                    newText += letter.toUpperCase();
                    nextConvertToCamelCase = false;
                } else {
                    const isUppercase = letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
                    if(isUppercase) {
                        newText += letter
                    } else {
                        nextConvertToCamelCase = letter.includes('-') || letter.includes('_') || letter.includes(' ');
                        if(!nextConvertToCamelCase)
                            newText += letter.toLowerCase();
                    }
                }
            }
        })
        return newText
    },

    convertToKebabCase(text) {
        if(text.includes('_')) {
            return text.toLowerCase().replace(/_/g, '-')
        } else if(text.includes('-')) {
            return text.toLowerCase()
        } else if(text.includes(' ')) {
            return text.toLowerCase().replace(/ /g, '-')
        } else {
            let newText = '';
            text.split('').forEach((letter, letterIdx) => {
                if(letterIdx === 0) {
                    newText += letter.toLowerCase();
                } else {
                    const isUppercase = letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
                    if(isUppercase)
                        newText += '-';
                    newText += letter.toLowerCase();
                }
            })
            return newText
        }
    },

}

module.exports = main
