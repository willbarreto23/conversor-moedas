const converterButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyOrigin = document.querySelector(".currency-origin")

async function convertervalues() {

    const inputCurrencyValue =
        Number(document.querySelector(".input-currency").value)

    const currencyValueConvert =
        document.getElementById("real")

    const currencyValueConverted =
        document.getElementById("dolar")

    try {

        const response = await fetch(
            "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL"
        )

        const data = await response.json()

        const rates = {
            BRL: 1,
            USD: Number(data.USDBRL.bid),
            EUR: Number(data.EURBRL.bid),
            GBP: Number(data.GBPBRL.bid),
            BTC: Number(data.BTCBRL.bid)
        }

        const fromCurrency = currencyOrigin.value
        const toCurrency = currencySelect.value

        const valueInBRL =
            inputCurrencyValue * rates[fromCurrency]

        const result =
            valueInBRL / rates[toCurrency]

        // MOEDA DE ORIGEM

        if (fromCurrency === "BRL") {
            currencyValueConvert.innerHTML =
                new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(inputCurrencyValue)
        }

        if (fromCurrency === "USD") {
            currencyValueConvert.innerHTML =
                new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(inputCurrencyValue)
        }

        if (fromCurrency === "EUR") {
            currencyValueConvert.innerHTML =
                new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(inputCurrencyValue)
        }

        if (fromCurrency === "GBP") {
            currencyValueConvert.innerHTML =
                new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format(inputCurrencyValue)
        }

        if (fromCurrency === "BTC") {
            currencyValueConvert.innerHTML =
                inputCurrencyValue.toFixed(8) + " BTC"
        }

        // MOEDA DE DESTINO

        if (toCurrency === "BRL") {
            currencyValueConverted.innerHTML =
                new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(result)
        }

        if (toCurrency === "USD") {
            currencyValueConverted.innerHTML =
                new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(result)
        }

        if (toCurrency === "EUR") {
            currencyValueConverted.innerHTML =
                new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR"
                }).format(result)
        }

        if (toCurrency === "GBP") {
            currencyValueConverted.innerHTML =
                new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP"
                }).format(result)
        }

        if (toCurrency === "BTC") {
            currencyValueConverted.innerHTML =
                result.toFixed(8) + " BTC"
        }

    } catch (error) {

        alert("Erro ao buscar cotações")
        console.log(error)

    }

}
function changeCurrency() {

    const currencyName =
        document.getElementById("moeda-americana")

    const currencyImage =
        document.querySelector(".currency-American")

    if (currencySelect.value === "USD") {

        currencyName.innerHTML = "Dólar Americano"

        currencyImage.src =
            "./assets/estados-unidos (1) 1.jpg"

    }

    if (currencySelect.value === "EUR") {

        currencyName.innerHTML = "Euro"

        currencyImage.src =
            "./assets/euro.jpg"

    }

    if (currencySelect.value === "GBP") {

        currencyName.innerHTML = "Libra"

        currencyImage.src =
            "./assets/libra 1.jpg"

    }

    if (currencySelect.value === "BTC") {

        currencyName.innerHTML = "Bitcoin"

        currencyImage.src =
            "./assets/bitcoin 1.jpg"

    }

    if (currencySelect.value === "BRL") {

        currencyName.innerHTML = "Real Brasileiro"

        currencyImage.src =
            "./assets/brasil 2.jpg"

    }

    changeOriginCurrency()

    convertervalues()

}

function changeOriginCurrency() {

    const originName =
        document.getElementById("currency-origin-name")

    const originImage =
        document.querySelector(".currency-origin-image")

    if (currencyOrigin.value === "BRL") {

        originName.innerHTML = "Real Brasileiro"

        originImage.src =
            "./assets/brasil 2.jpg"

    }

    if (currencyOrigin.value === "USD") {

        originName.innerHTML = "Dólar Americano"

        originImage.src =
            "./assets/estados-unidos (1) 1.jpg"

    }

    if (currencyOrigin.value === "EUR") {

        originName.innerHTML = "Euro"

        originImage.src =
            "./assets/euro.jpg"

    }

    if (currencyOrigin.value === "GBP") {

        originName.innerHTML = "Libra Esterlina"

        originImage.src =
            "./assets/libra 1.jpg"

    }

    if (currencyOrigin.value === "BTC") {

        originName.innerHTML = "Bitcoin"

        originImage.src =
            "./assets/bitcoin 1.jpg"

    }

}
currencySelect.addEventListener(
    "change",
    changeCurrency
)

currencyOrigin.addEventListener(
    "change",
    changeOriginCurrency
)

converterButton.addEventListener(
    "click",
    convertervalues
)
