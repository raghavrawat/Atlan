export const getHeaderObject = (data) => {
    if (!data || !data.length) {
        return
    }
    const headerKeys = Object.keys(data[0])
    return headerKeys.map(item => {
        return {
            text: item,
            sortable: true,
            value: item,
            width: 200
        }
    })
}