const Map = () => {
  return (
    <div className={`rounded-3xl overflow-hidden shadow-xl h-100 lg:h-122 xl:h-116 fade-in border border-border/33`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975788349586!2d-46.65844708502213!3d-23.561414984686447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Pet Shop"
        className={`bg-muted`}
      />
    </div>
  );
};

export default Map;
