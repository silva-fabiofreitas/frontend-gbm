import { SelectCity, SelectDistrict, SelectState, SelectGender, SelectRisk, SelectTypeOccurrence, SelectTypeTrafficAccident, SelectUnitType } from './SelectRegister'
import { createContext } from 'react';


export const GlobalContext = createContext();

export default function Form(props) {
    const register = props?.register    
    const setRegister =props?.setRegister
    return (
        <GlobalContext.Provider value={{register, setRegister}}>
            <form onSubmit={props.handleSubimit}>
                <h1 className="font-semibold text-lg mb-6">Local</h1>
                <div className="flex justify-around">
                    <div className="relative mb-6">
                        <label
                            htmlFor="stateID"
                            className="pointer-events-none"
                        >UF
                        </label>
                        <SelectState id='stateID'/>
                    </div>
                    <div className="relative mb-6">
                        <label
                            htmlFor="cityID"
                            className="pointer-events-none"
                        >Cidade
                        </label>
                        <SelectCity id='cityID'/>
                    </div>
                    <div className="relative mb-6">
                        <label
                            htmlFor="districtID"
                            className="pointer-events-none"
                        >Bairro
                        </label>
                        <SelectDistrict id='districtID'/>
                    </div>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="street" id="floating_street"
                        value={register?.address?.street || ''}
                        onChange={(e) => props.setRegister &&
                            props.setRegister(
                                {
                                    ...props.register, address:
                                        { ...props.register.address, street: e.target.value }
                                }
                            )}
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

                <h1 className="font-semibold text-lg mb-6">Perfil</h1>
                <div className="flex justify-around items-end gap-8">
                    <div className="relative flex-1">
                        <label
                            htmlFor="genderID"
                            className="pointer-events-none"
                        >Genero
                        </label>
                        <SelectGender className='mr-4' id='genderID'/>
                    </div>

                    <div className="relative z-0 group flex-1">
                        <input type="number" name="age" id="floating_age"
                            value={props.register?.profile?.age || ""}
                            onChange={(e) => props.setRegister && props.setRegister({ ...props.register, profile: { ...props.register.profile, age: e.target.value } })}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label
                            htmlFor="floating_age"
                            className="peer-focus:font-medium
                        absolute text-sm text-gray-500
                      dark:text-gray-400
                        duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                        peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
                        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-focus:scale-75 peer-focus:-translate-y-6">
                            Idade
                        </label>
                    </div>
                </div>

                <h1 className="font-semibold text-lg my-6">Evento</h1>
                <div className="flex justify-around">
                    <div className="relative mb-6 flex-1">
                        <label
                            htmlFor="riskID"
                            className="pointer-events-none"
                        >Risco
                        </label>
                        <SelectRisk id='riskID'/>
                    </div>
                    <div className="relative mb-6 flex-1">
                        <label
                            htmlFor="typeOccurrenceID"
                            className="pointer-events-none"
                        >Tipo de ocorrência
                        </label>
                        <SelectTypeOccurrence id='typeOccurrenceID'/>
                    </div>
                    <div className="relative mb-6 flex-1">
                        <label
                            htmlFor="typeTrafficAccidentID"
                            className="pointer-events-none"
                        >Acidente de Transito
                        </label>
                        <SelectTypeTrafficAccident id='typeTrafficAccidentID'/>
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className="relative mb-6 flex-1">
                        <label
                            htmlFor="unitTypeID"
                            className="pointer-events-none"
                        >Tipo de unidade
                        </label>
                        <SelectUnitType id='unitTypeID'/>
                    </div>
                    <div className="relative mb-6 flex-1">
                        <label
                            htmlFor="dateID"
                            className="pointer-events-none block"
                        >Data
                        </label>
                        <input type='datetime-local' name='date' id='dateID' value={props?.register?.date?.replace('Z', '') || ''}
                            onChange={(e) => props.setRegister && props.setRegister({ ...props.register, date: e.target.value })}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-4 float-right inline-block rounded btn px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                    Salvar
                </button>
            </form>
        </GlobalContext.Provider>
    )
}