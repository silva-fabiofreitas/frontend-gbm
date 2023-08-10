import fsPromises from 'fs/promises';
import path from 'path'

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

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), '/public/assets/themas/walden.project.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);
 
  return objectData
}