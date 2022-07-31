module.exports = {
    verbose: true,
    testRegex: '(/__tests__/.*|(\\.|/)(test))\\.(jsx?|tsx?)$',
    transform: {
        '\\.[jt]sx?$': ['babel-jest', {rootMode: 'upward'}],
        '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
    },
    testPathIgnorePatterns: ['dist'],
    testEnvironment: 'jsdom',
};
