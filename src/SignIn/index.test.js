import React from 'react'
import SignIn from '.'
import { render, fireEvent } from '@testing-library/react'

describe('SignIn', () => {
    it('should allow user to put in password', () => {
        const { getByLabelText } = render(<SignIn />)
        const passwordField = getByLabelText(/password/i)
        const expectedPassword = 'superpassword'

        fireEvent.change(passwordField, { target: { value: expectedPassword }})

        expect(passwordField.value).toBe(expectedPassword)
    })
})