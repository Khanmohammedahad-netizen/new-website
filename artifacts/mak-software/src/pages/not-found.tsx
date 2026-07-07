export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-8xl font-serif mb-4">404</h1>
        <p className="font-mono tracking-widest uppercase text-muted-foreground">Page Not Found</p>
      </div>
    </div>
  );
}
