export const BASEURL = 'http://127.0.0.1:8000'

export async function getPieCharts(){
    const resp = await fetch(`${BASEURL}/registro-correncia/get_pie_charts/`, {
        cache:'no-store'
    })
    const data = await resp.json()
    return data
}

export async function getHistogramCharts(){
    const resp = await fetch(`${BASEURL}/registro-correncia/get_histogram_charts/`, {
        cache:'no-store'
    })
    const data = await resp.json()
    return data
}