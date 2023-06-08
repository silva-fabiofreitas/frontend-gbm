
import {SelectCity, SelectDistrict, SelectState} from './SelectRegister'

export default function Form(props) {
 
    return (
        <form onSubmit={props.handleSubimit}>
            <h1 className="font-semibold text-lg">Registros de ocorrências</h1>
            <div className="flex justify-around mt-10">
                <div className="relative mb-6">
                    <label
                        htmlFor="stateID"
                        className="pointer-events-none"
                    >UF
                    </label>                    
                    <SelectState id='stateID' selected={props?.register?.state} />
                </div>
                <div className="relative mb-6">
                    <label
                        htmlFor="cityID"
                        className="pointer-events-none"
                    >Cidade
                    </label>
                    <SelectCity id='cityID' selected={props?.register?.city}/>
                </div>
                <div className="relative mb-6">
                    <label
                        htmlFor="districtID"
                        className="pointer-events-none"
                    >Bairro
                    </label>
                    <SelectDistrict id='districtID' selected={props?.register?.district} />                    
                </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="street" id="floating_street" value={props.register?.street} onChange={(e)=> props.setRegister && props.setRegister({...props.register, street:e.target.value})} 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label
                    htmlFor="floating_street"
                    className="peer-focus:font-medium
                    absolute text-sm text-gray-500
                   dark:text-gray-400
                    duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                    peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6">
                    Logradouro
                </label>
            </div>

            <button
                type="submit"
                className="inline-block rounded btn px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
                Salvar
            </button>
        </form>

    )
}