export const currencyFormat = amount => {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
