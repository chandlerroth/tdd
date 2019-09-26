import React from 'react'
import SignIn from '.'
import { render, fireEvent } from '@testing-library/react'

describe('SignIn', () => {
    it('should allow user to put in password', () => {
        // Assemble
        const { getByLabelText } = render(<SignIn />)
        const passwordField = getByLabelText(/password/i)
        const expectedPassword = 'superpassword'

        // Act
        fireEvent.change(passwordField, { target: { value: expectedPassword }})

        // Assert
        expect(passwordField.value).toBe(expectedPassword)
    })
})