test('El componente inicia con el rol ARIA correcto', () => {
  const comp = new AccessibleComponent({ ariaRole: 'dialog' });
  expect(comp.element.getAttribute('role')).toBe('dialog');
});