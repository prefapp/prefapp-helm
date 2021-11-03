import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Renders',
    Svg: require('../../static/img/render.svg').default,
    description: (
      <>
        Avoidance of hardcoding the artifact structure with the possibility of embedding block sections 
        of the values directly on the data section. Less code equals ease of debug.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('../../static/img/open_source.svg').default,
    description: (
      <>
        Updated and tested daily. No hidden magic over here: open to the public!
      </>
    ),
  },
  {
    title: 'Data blocks',
    Svg: require('../../static/img/inheritance.svg').default,
    description: (
      <>
        The "ph.override" method allows a data block to override another by merging both, 
        giving preference to the first one.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
