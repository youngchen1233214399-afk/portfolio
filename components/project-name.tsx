type ProjectNameProps = {
  name: string;
  displayCode?: string;
  codeClassName?: string;
};

export function ProjectName({ name, displayCode, codeClassName }: ProjectNameProps) {
  if (!displayCode || !name.startsWith(displayCode)) {
    return name;
  }

  const title = name.slice(displayCode.length).trimStart();

  return (
    <>
      <span className={codeClassName}>{displayCode}</span>
      {title ? ` ${title}` : null}
    </>
  );
}
