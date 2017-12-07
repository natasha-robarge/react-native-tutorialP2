import React, { Component } from 'react'
import {
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common/CardSection'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription() {
    const { library, expanded } = this.props

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      )
    }
  }

  render() {
    const { library, selectedLibraryId, selectLibrary } = this.props
    const { id, title } = library

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          selectedLibraryId !== id ? selectLibrary(id) : selectLibrary(null)
        }}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { selectedLibraryId } = state
  const expanded = selectedLibraryId === ownProps.library.id

  return { selectedLibraryId, expanded }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default connect(mapStateToProps, actions)(ListItem)