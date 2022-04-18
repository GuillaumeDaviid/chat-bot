import React from 'react'
import Chat from "../components/Chat.jsx";
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved, act } from '@testing-library/react';

describe('Chat Bot', () => {
    test('Should render without crashing', async () => {
        render(
            <Chat />
        )
    })


})