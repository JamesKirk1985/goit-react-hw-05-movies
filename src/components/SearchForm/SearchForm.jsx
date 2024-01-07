
export const SearchForm = ({setSearchParams}) => {

    function handleSubmit(event) {
        event.preventDefault()        
        setSearchParams({ query: event.target.input.value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="input"/>
            <button type="submit">search</button>
        </form>

    )
}
