import api from '../services/api';
import ModalVehicle from './ModalVehicle';
import Loading from '../components/Loading';
import React, { useState, useEffect } from 'react';
import { FaEdit, FaRegTimesCircle } from 'react-icons/fa';
import ModalConfirmation from '../utils/ModalConfirmationUtils';

const END_POINT = 'veiculos'
const PAGE_TITLE = 'Vehicle'

function Vehicle() {
  const [vehicles, setVehicles] = useState([]);
  const [vehicleToAction, setVechileToAction] = useState();
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllVehicles();
  }, [])

  // FUNÇÕES PARA ABRIR MODAL

  function openModal(modal, dado = undefined) {
    setModal(modal);
    setVechileToAction(dado);
  }

  function closeModal() {
    setModal(undefined);
    getAllVehicles();
  }

  // FUNÇÕES 
  async function getAllVehicles() {
    try {
      setIsLoading(true);
      const response = await api.get(`${END_POINT}`)
      setVehicles(response.data);
      setIsLoading(false);
    }
    catch (e) {
      error(e);
    }
  }

  async function addVehicle(data) {
    try {
      setIsLoading(true);
      data = await api.post(`${END_POINT}`, data);
      getAllVehicles(1, 10);
      setIsLoading(false);
    }
    catch (e) {
      error(e);
    }

    closeModal();
  }

  async function editVehicle(data) {
    try {
      await api.put(`${END_POINT}/${vehicleToAction.id}`, data);
    }
    catch (e) {
      error(e);
    }

    closeModal();
  }

  async function deleteVehicle(validation) {
    try {
      if (validation) {
        await api.delete(`${END_POINT}/${vehicleToAction.id}`);
      }
    }
    catch (e) {
      error(e);
    }

    closeModal();
  }

  async function updateSale(isSold) {
    try {
      if (isSold) {
        await api.patch(`${END_POINT}/${vehicleToAction.id}/sold/${isSold}`);
      }
    }
    catch (e) {
      error(e);
    }

    closeModal();
  }

  function getTotalSale() {
    let qtdSolde = vehicles.filter(vehicle => vehicle.isSold)
    return qtdSolde.length;
  }

  function error(e) {
    console.error(e.response ? e.response.data.message : e.message);
  }

  // RENDER

  return (
    <main className="App col-12 pr-4 pl-4">
      {isLoading
        ? <Loading />
        : <section>

          {/* BARRA MENU INTERNO */}
          <div style={{ alignItems: 'center' }} className="col-12 row justify-content-between mx-0 px-0">
            <span>
              <h1 className="display-4">{PAGE_TITLE}</h1>
            </span>
            <span>
              <button type="button" className="btn btn-success ml-2" onClick={() => openModal('ADD')}>
                Add Vehicle
              </button>
            </span>
          </div>

          <div style={{ alignItems: 'center' }} className="col-12 row justify-content-between mx-0 px-0">
            <span>
              Total sold vehicles: {getTotalSale()}
            </span>
          </div>

          <div style={{ alignItems: 'center' }} className="col-12 row justify-content-between mx-0 px-0">
            <span>
              Vechicles by decade: 12
            </span>
          </div>

          <div style={{ alignItems: 'center' }} className="col-12 row justify-content-between mx-0 px-0">
            <span>
              Vechicles by brand: {vehicles.length}
            </span>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Vehicle</th>
                <th scope="col">Brand</th>
                <th scope="col">Year</th>
                <th scope="col">Sold</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>

              {
                vehicles.map(
                  vehicle => {
                    return (<tr key={vehicle.id}>
                      <td>{vehicle.vehicle}</td>
                      <td>{vehicle.brand}</td>
                      <td>{vehicle.year}</td>
                      <td>{vehicle.isSold ? "Yes" : "No"}</td>
                      <td >
                          <a onClick={() => openModal('EDI', vehicle)}>Edit</a>
                          <a onClick={() => openModal('EDI', vehicle)}>Solded</a>
                          <a onClick={() => openModal('EDI', vehicle)}>Delete</a>
                      </td>
                    </tr>)
                  }
                )
              }
            </tbody>
          </table>
        </section>
      }
      <section>

        {/* MODAIS */}
        {
          modal && modal === 'ADD' && <ModalVehicle
            title={`Add ${PAGE_TITLE}`}
            data={undefined}
            onClose={closeModal}
            onSave={addVehicle}
            isOpen={modal === 'ADD'} />
        }

        {
          modal && modal === 'DEL' && <ModalConfirmation
            title={`Delete ${PAGE_TITLE}`}
            text={`Deseja deletar o produto ${vehicleToAction.name}`}
            onClose={closeModal}
            onResponse={deleteVehicle}
            isOpen={modal === 'DEL'} />
        }

      </section>
    </main>
  );
}

export default Vehicle;