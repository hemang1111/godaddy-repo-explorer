import { Drawer } from 'rsuite'

const DrawerRsuite = (props) => {

  try {
    return (
      <Drawer
        open={props.open}
        onOpen={props.onOpen}
        onClose={props.onClose}
        size={props.size}
        className={props.className}
        placement={props.placement || 'right'}
        backdrop={props.backdrop || true}
        style={props.style || {}}
      >

        <Drawer.Header>
          {props.header}
        </Drawer.Header>

        <Drawer.Body>
          {props.body}
        </Drawer.Body>
      </Drawer>
    )

  } catch (e) {
    console.log(e)
    return <></>
  }
}

export default DrawerRsuite
