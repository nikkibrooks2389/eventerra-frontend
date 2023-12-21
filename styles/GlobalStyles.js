import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    primaryText: {
        fontSize: 16,
        color: '#999999',
    },
    secondaryText: {
        fontSize: 16,
        color: '#B1B1B1',
    },
    primaryButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        color: '#ffffff',
        fontSize: 16,
    },

    input: {
        borderWidth: 1,
        borderColor: '#B1B1B1',
        padding: 15,
        borderRadius: 25,
        marginBottom: 15,
        width: '100%',
        fontSize: 16,
        color: '#B1B1B1',
        overflow: 'hidden',
    },
    link: {
        color: '#007bff',
        marginTop: 10,
    },


    // ... any other global styles you find useful
});