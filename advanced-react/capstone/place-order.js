import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [orderingStatus, setOrderingStatus] = useState(false)

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })

        setAllPhotos(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function placeOrder() {
        setOrderingStatus(true)
        setTimeout(() => endPlacingOrder(), 3000)
    }

    function endPlacingOrder() {
        setCartItems([])
        setOrderingStatus(false)
        console.log('Order Placed!')
    }

    return (
        <Context.Provider value={{
            allPhotos, toggleFavorite,
            cartItems, addToCart,
            removeFromCart, placeOrder,
            orderingStatus
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

