import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import api from '../services/api'

function ModalComponent(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState({ prodcutDigital: false, visible: true })

  // VARIAVEIS UTILIZAVEIS NO MODAL
  const [listCategorys, setListCategorys] = useState();

  useEffect(() => {
    getListCategorys();
    setIsOpen(props.isOpen);
    onEditModal();
  }, [])

  async function getListCategorys() {
    const dados = await api.get(`category/valuelabel`);
    setListCategorys(dados.data);
  }

  function onEditModal() {
    if (props.data !== undefined) {
      setProduct(props.data)
    }
  }

  function closeModal() {
    setIsOpen(!isOpen)
    props.onClose(false)
  }

  function saveModal() {
    props.onSave(product)
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
              <label htmlFor='nomeProduto'>Name</label>
              <input type='text' className="form-control" id='nomeProduto' placeholder='Nome do produto'
                onChange={event => setProduct({ ...product, name: event.target.value })} value={product.name} />
            </div>

            <div className="form-group col-6">
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="switchDigital" checked={product.prodcutDigital}
                  onChange={event => setProduct({ ...product, prodcutDigital: event.target.checked })} />
                <label className="custom-control-label" htmlFor="switchDigital">Product digital</label>
              </div>
            </div>

            <div className="form-group col-6">
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="switchVisivel" checked={product.visible}
                  onChange={event => setProduct({ ...product, visible: event.target.checked })} />
                <label className="custom-control-label" htmlFor="switchVisivel">Product {product.visible ? "visible" : "invisible"}</label>
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