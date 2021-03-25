import React from 'react';
import { Formik, Form } from 'formik';
import { validationSchema } from '../utils/validationSchemas';
import { initialValueI } from '../models/FormikModels';

import { FormikInput } from './shared/FormikAdapters/FormikInput';
import { FormikSelect } from './shared/FormikAdapters/FormikSelect';
import { FormikCheckbox } from './shared/FormikAdapters/FormikCheckbox';
import { FormikRadio } from './shared/FormikAdapters/FormikRadio';

import '../App.css';

export const TaskForm: React.FC = () => {
  const initialValue: initialValueI = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    address: '',
    address2: '',
    country: '',
    state: '',
    zip: 0,
    saveInformation: false,
    sameAddress: false,
    payment: ''
  };

  return (
    <div className='App'>
      Formik:
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValue}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ touched, errors }) => (
          <Form className='formikForm'>
            <div className='twoBlocksSection'>
              <FormikInput label='First name' name='firstName' />
              <FormikInput label='Last name' name='lastName' />
            </div>
            <div>
              <FormikInput label='Username' name='username' />
              <FormikInput label='Email' name='email' />
              <FormikInput label='Address' name='address' />
            </div>
            <FormikInput label='Address 2' name='address2' />
            <div className='threeBlocksSection'>
              <FormikSelect label='Country' name='country' />
              <FormikInput label='State' name='state' />
              <FormikInput label='Zip' name='zip' />
            </div>
            <hr />
            <div className='checkboxWrapper'>
              <FormikCheckbox label='Shipping address is the same as my billing address' name='sameAddress' />
              <FormikCheckbox label='Save this information for the next time' name='saveInformation' />
              <hr />
            </div>
            <div>
              <h2>Payments</h2>
              <div className='radioWrapper'>
                <FormikRadio label='Credit card' name='payment' value='credit card' />
                <FormikRadio label='Debit card' name='payment' value='debit card' />
                <FormikRadio label='PayPal' name='payment' value='paypal' />
              </div>
              <hr />
            </div>
            <button>Continue to checkout</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
