import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import api from '../services/api'
import Vehicle from './Vechicle';

function ModalComponent(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [vehicle, setVehicle] = useState({ isSold: false })

  useEffect(() => {
    setIsOpen(props.isOpen);
    onEditModal();
  }, [])

  function onEditModal() {
    if (props.data !== undefined) {
      setVehicle(props.data)
    }
  }

  function closeModal() {
    setIsOpen(!isOpen)
    props.onClose(false)
  }

  function saveModal() {
    props.onSave(vehicle)
    setIsOpen(!isOpen)
  }

  return (
    <main>
      <section>
        <Modal isOpen={isOpen}>

          <ModalHeader>
            {props.title}
          </ModalHeader>

          <ModalBody className="row">
            <div className="form-group col-12">
              <label htmlFor='nomeProduto'>Brand</label>
              <input type='text' className="form-control" id='nomeProduto' placeholder='Nome do produto'
                onChange={event => setVehicle({ ...vehicle, brand: event.target.value })} value={vehicle.brand} />
            </div>

            <div className="form-group col-12">
              <label htmlFor='nomeProduto'>Description</label>
              <input type='text' className="form-control" id='nomeProduto' placeholder='Nome do produto'
                onChange={event => setVehicle({ ...vehicle, description: event.target.value })} value={vehicle.description} />
            </div>

            <div className="form-group col-12">
              <label htmlFor='nomeProduto'>Vehicle</label>
              <input type='text' className="form-control" id='nomeProduto' placeholder='Nome do produto'
                onChange={event => setVehicle({ ...vehicle, vehicle: event.target.value })} value={vehicle.vehicle} />
            </div>

            <div className="form-group col-6">
              <label htmlFor='nomeProduto'>Year</label>
              <input type='text' className="form-control" id='nomeProduto' placeholder='Nome do produto'
                onChange={event => setVehicle({ ...vehicle, year: event.target.value })} value={vehicle.year} />
            </div>

            <div className="form-group col-6">
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="switchVisivel" checked={vehicle.isSold}
                  onChange={event => setVehicle({ ...vehicle, isSold: event.target.checked })} />
                <label className="custom-control-label" htmlFor="switchVisivel">Veichle {vehicle.isSold ? "sold" : "not sold"}</label>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <button type="button" onClick={() => closeModal()} className="btn btn-light">Cancel</button>
            <button type="button" onClick={() => saveModal()} className="btn btn-success">Save</button>
          </ModalFooter>

        </Modal>
      </section>
    </main>
  );
}

export default ModalComponent;
