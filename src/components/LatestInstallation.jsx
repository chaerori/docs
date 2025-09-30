import React, { useEffect, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export const MavenLatestInstallation = ({ pkg }) => {
  const [version, setVersion] = useState('+');

  useEffect(() => {
    const raw = JSON.stringify({
      maven: pkg,
    });

    const requestOptions = {
      method: 'POST',
      body: raw,
    };

    fetch(
      'https://b72qj023g7.execute-api.ap-south-1.amazonaws.com/default/android-core-latest',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => setVersion(result.latestVersion ?? '+'));
  }, []);
  return (
    <div>
      <CodeBlock language="groovy">
        {`dependencies {
    // (other dependencies)
    implementation 'io.dyte:${pkg}:${version}'
}`}
      </CodeBlock>
    </div>
  );
};

export const CocoaPodInstallation = ({ pkg, path }) => {
  const [version, setVersion] = useState(undefined);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      body: null,
    };

    const url = `https://api.github.com/repos/CocoaPods/Specs/contents/Specs/${path}/`;

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => setVersion(result[result.length - 1]['name']));
  }, []);

  return (
    <div>
      <CodeBlock language="ruby">
        {`pod '${pkg}' ${version ? `, '${version}'` : ''}`}
      </CodeBlock>
    </div>
  );
};

