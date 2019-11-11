import React, { Component } from 'react';
import { Form, Row, Col, Select} from 'antd';
import InputTextAntd from '../../Componentes/Antd/InputTextAntd';
import InputEmail from '../../Componentes/Antd/InputEmail';
import CodigoPostalAntd from '../../Componentes/Antd/CodigoPostalAntd';

class DatosInmueble extends Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Datos: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        sm: { span: 10 },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className="cont-form">
        <Row>
          <Col style={{height: '35px'}} span={12}>
            <Form.Item label="ID Solicitud::" className="no-req">
              {getFieldDecorator('idSolicitud', {
                rules: [],
              })(<InputTextAntd className="col12" disabled="disabled" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col style={{height: '35px'}} span={12}>
            <Form.Item label="Nombre de la Inmobiliria::" className="no-req">
              {getFieldDecorator('nombreInmobiliria', {
                rules: [
                  {
                    pattern: new RegExp(/^[a-zA-Z ]+$/),
                    message: 'Este campo solo puede contener letras.'
                  },
                ],
              })(<InputTextAntd className="col12" disabled="disabled" />)}
            </Form.Item>
          </Col>
          <Col style={{height: '35px'}} span={12}>
            <Form.Item label="Nombre del asesor inmobiliario::" className="no-req">
              {getFieldDecorator('nombreAsesor', {
                rules: [
                  {
                    pattern: new RegExp(/^[a-zA-Z .]+$/),
                    message: 'Este campo solo puede contener letras.'
                  },
                ],
              })(<InputTextAntd className="col12" disabled="disabled" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col style={{height: '35px'}} span={12}>
            <Form.Item label="Correo electrónico::" className="no-req">
              {getFieldDecorator('emailAsesor', {
                rules: [
                  {
                    type: 'email',
                    message: 'Ingresa un correo electrónico válido.',
                  },
                ],
              })(<InputEmail className="col12" disabled="disabled" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col style={{height: '35px'}} span={12}>
            <Form.Item label="Uso que se dará al inmueble::">
              {getFieldDecorator('usoInmueble', {
                rules: [
                  {
                    required: true,
                    message: 'Este campo es requerido', 
                  },
                ],
              })(<Select style={{width: "48%"}} size="small" disabled="disabled">
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col style={{height: '35px'}} span={12}>
            <Form.Item label="Valor mensual de la renta:(incluye mantenimiento)">
              {getFieldDecorator('valorMensual', {
                rules: [
                  {
                    required: true,
                    message: 'Este campo es requerido', 
                  },
                ],
              })(<InputTextAntd className="col12" disabled="disabled"/>)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col style={{height: '35px'}} span={12}>
            <Form.Item label="Calle y Número::">
              {getFieldDecorator('calleNumero', {
                rules: [
                  {
                    required: true,
                    message: 'Este campo es requerido', 
                  },
                ],
              })(<InputTextAntd className="col12" disabled="disabled"/>)}
            </Form.Item>
          </Col>
          <Col style={{height: '35px'}} span={12}>
            <Form.Item label="Colonia::">
              {getFieldDecorator('colonia', {
                rules: [
                  {
                    required: true,
                    message: 'Este campo es requerido', 
                  },
                ],
              })(<InputTextAntd className="col12" disabled="disabled"/>)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col style={{height: '50px'}} span={12}>
            <Form.Item label="Municipio::">
              {getFieldDecorator('municipio', {
                rules: [
                  {
                    required: true,
                    message: 'Este campo es requerido', 
                  },
                ],
              })(<InputTextAntd className="col12" disabled="disabled"/>)}
            </Form.Item>
          </Col>
          <Col style={{height: '35px'}} span={12}>
            <Form.Item label="Código Postal::">
              {getFieldDecorator('codigoPostal', {
                rules: [
                  {
                    required: true,
                    message: 'Este campo es requerido', 
                  }
                ],
              })(<CodigoPostalAntd className="codigoPostal" disabled="disabled"/>)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'datosInmueble' })(DatosInmueble);
export default WrappedRegistrationForm;