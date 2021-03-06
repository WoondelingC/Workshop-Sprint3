import React from 'react'
import CardsTaks from './CardsTaks'
import CardSelect from './CardSelect'
import AddTaks from './AddTaks'
import '../../styles/Login.css'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { Navbar } from '../app/Navbar'

const Main = styled.main`
    width: 140%;
`

const AppTaks = () => {
    const { card } = useSelector(state => state.card)

    return (
        <div className="App">
            
            <Navbar />

            <div className="container ">
                <div className="row mt-4">
                    <div className="col-md-4 text-center py-3">
                        <img src="data:image/png;base64,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" className="App-logo log " alt="logo" />
                        <AddTaks />
                    </div>

                    <div className="col-md-8">
                        <Main className="row">
                            <main>
                                {
                                    (card.length !== 0)
                                        ? <CardsTaks card={card} />
                                        : <CardSelect />
                                }
                            </main>
                        </Main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppTaks