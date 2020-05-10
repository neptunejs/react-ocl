import { IMoleculeToSVGOptions, Molecule } from 'openchemlib/minimal';
import { ComponentType } from 'react';

// Minimal and core APIs

export interface IErrorComponentProps {
  value: string;
  error: Error;
}

export interface IBaseSvgRendererProps extends IMoleculeToSVGOptions {
  width?: number;
  height?: number;
  id?: string;

  ErrorComponent?: ComponentType<IErrorComponentProps>;

  atomHighlight?: number[];
  atomHighlightOpacity?: number;
  atomHighlightColor?: string;
  onAtomEnter?: (atomId: number, event: React.MouseEvent<SVGElement>) => void;
  onAtomLeave?: (atomId: number, event: React.MouseEvent<SVGElement>) => void;
  onAtomClick?: (atomId: number, event: React.MouseEvent<SVGElement>) => void;

  bondHighlight?: number[];
  bondHighlightOpacity?: number;
  bondHighlightColor?: string;
  onBondEnter?: (bondId: number, event: React.MouseEvent<SVGElement>) => void;
  onBondLeave?: (bondId: number, event: React.MouseEvent<SVGElement>) => void;
  onBondClick?: (bondId: number, event: React.MouseEvent<SVGElement>) => void;
}

export interface ISmilesSvgRendererProps extends IBaseSvgRendererProps {
  smiles: string;
}
export function SmilesSvgRenderer(props: ISmilesSvgRendererProps): JSX.Element;

export interface IMolfileSvgRendererProps extends IBaseSvgRendererProps {
  molfile: string;
}
export function MolfileSvgRenderer(
  props: IMolfileSvgRendererProps,
): JSX.Element;

export interface IIdcodeSvgRendererSvgRendererProps
  extends IBaseSvgRendererProps {
  idcode: string;
  coordinates?: string;
}
export function IdcodeSvgRenderer(
  props: IIdcodeSvgRendererSvgRendererProps,
): JSX.Element;

// Full API

export interface IStructureEditorProps {
  width?: number;
  height?: number;
  initialMolfile?: string;
  fragment?: boolean;
  svgMenu?: boolean;
  onChange?: (molfile: string, molecule: Molecule) => void;
  onAtomEnter?: (atomId: number) => void;
  onAtomLeave?: (atomId: number) => void;
  onBondEnter?: (bondId: number) => void;
  onBondLeave?: (bondId: number) => void;
}
export function StructureEditor(props: IStructureEditorProps): JSX.Element;
