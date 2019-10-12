// @flow
import * as React from 'react';
import Radium from 'radium';
import { Text, View } from 'react-sketchapp';
import Button from './Button';
import { baseStyles, spacing, typography } from '../designSystem';

type Props = {
  filename: string;
  filesize: string;
  style?: any;
};

const styles = {
  File: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  'File-Body': {
    flexDirection: 'column'
  }
};

const File = ({ filename, filesize, style }: Props) => (
  <View name="File" style={[style, styles.File, baseStyles.File]}>
    <View style={styles['File-Body']}>
      <Text style={[typography.Base, baseStyles.File_FileName]}>
        {filename}
      </Text>
      <Text style={[typography.Base, baseStyles.File_FileSize]}>
        {filesize}
      </Text>
    </View>
  </View>
);

export default Radium(File) as (prop: Props) => JSX.Element;
export type FileProps = Props;
