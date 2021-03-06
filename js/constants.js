export default {
    API: {
        LOAD: 'https://js.dump.academy/kekstagram/data',
        SAVE: 'https://js.dump.academy/kekstagram'
    },
    TIMEOUT: {
        XHR: 10000,
        RELOAD: 5000,
        SUCCESS: 2000,
        DEBOUNCE: 0.5
    },
    EFFECT: {
        VANISH: 'transform: scale(0); transition: all 0.3s ease'
    },
    HASHTAG: {
        MAX_AMOUNT: 5,
        MAX_LENGTH: 20
    },
    COLOR: {
        SUCCESS: '#28a745',
        WARNING: '#ffc107',
        DANGER: '#dc3545'
    },
    RESIZE_PARAMS: {
        MIN: 30,
        MAX: 100,
        STEP: 10,
        DEFAULT: 80
    },
    FILTERS_COEF: {
        CHROME: 0.01,
        SEPIA: 0.01,
        MARVIN: 1,
        PHOBOS: 0.035,
        HEAT: 0.045
    },
    SCALE_LENGTH: 450,
    NEW_AMOUNT: 12,
    LOAD_AMOUNT: 5,
    MAGIC_NUMBER: 5,
    IMAGE_FORMATS: ['gif', 'jpg', 'jpeg', 'png']
};