import React from 'react'
import Chat from "../components/Chat.jsx";
import { msgBot } from '../components/Messages'
import { render, screen } from '@testing-library/react';

describe('Chat Bot', () => {
    test('Should render without crashing', async () => {
        render(
            <Chat />
        )
    })

    test('should display chat', async () => {
        render(
            <Chat />
        )
        const button = screen.getByRole('button')
        expect(button.textContent).toBe("Envoyer")
    })

    test('should display default message', async () => {
        const myMessage = msgBot("random msg")
        expect(myMessage).toStrictEqual(<p className='chat_bot-msg'>Je n'est pas compris ton dernier message</p>)
    })

    test('should to transform the message to lower case', async () => {
        const myMessage = msgBot("BonJour")
        expect(myMessage).toStrictEqual(<p className='chat_bot-msg'>Bonjour !</p>)
    })
})