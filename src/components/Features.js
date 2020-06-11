import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, index) => (
      <div key={item.text} className={
        c({
          "column": true,
          "is-6": (index + 1) !== gridItems.length,
          "is-12 columns is-centered": (index + 1) === gridItems.length && gridItems.length%2!==0,
        })
      }>
        <section className={c({
            "section": true,
            "column is-6": (index + 1) === gridItems.length && gridItems.length%2!==0,
          })
        }>
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                height: '220px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
