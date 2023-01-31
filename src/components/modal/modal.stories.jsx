import Modal from '.'

export default {
  title: 'Gerais/Modal',
  component: Modal
}

const Template = args => <Modal {...args} />

export const ModalTemplate = Template.bind({})

ModalTemplate.args = {
  id: 'modal'
}
