IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
CREATE TABLE [Clientes] (
    [Id] int NOT NULL IDENTITY,
    [TipoEndereco] int NOT NULL,
    [Nome] nvarchar(100) NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [CPF] nvarchar(14) NOT NULL,
    [DataCadastro] datetime2 NOT NULL,
    [Ativo] bit NOT NULL,
    CONSTRAINT [PK_Clientes] PRIMARY KEY ([Id])
);

CREATE TABLE [Hospitais] (
    [Id] int NOT NULL IDENTITY,
    [Nome] nvarchar(100) NOT NULL,
    [Endereco] nvarchar(max) NOT NULL,
    [Telefone] nvarchar(11) NOT NULL,
    CONSTRAINT [PK_Hospitais] PRIMARY KEY ([Id])
);

CREATE TABLE [Usuarios] (
    [Id] int NOT NULL IDENTITY,
    [TipoEndereco] int NOT NULL,
    [Nome] nvarchar(100) NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [CPF] nvarchar(14) NOT NULL,
    [DataCadastro] datetime2 NOT NULL,
    [Ativo] bit NOT NULL,
    [TipoUsuario] int NULL,
    [HospitalId] int NULL,
    [SenhaHash] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Usuarios] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Usuarios_Hospitais_HospitalId] FOREIGN KEY ([HospitalId]) REFERENCES [Hospitais] ([Id])
);

CREATE TABLE [Enderecos] (
    [Id] int NOT NULL IDENTITY,
    [Logradouro] nvarchar(max) NOT NULL,
    [Numero] nvarchar(10) NOT NULL,
    [Complemento] nvarchar(150) NOT NULL,
    [Bairro] nvarchar(100) NOT NULL,
    [Cidade] nvarchar(100) NOT NULL,
    [Estado] nvarchar(50) NOT NULL,
    [CEP] nvarchar(9) NOT NULL,
    [ClienteId] int NOT NULL,
    [UsuarioId] int NULL,
    CONSTRAINT [PK_Enderecos] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Enderecos_Clientes_ClienteId] FOREIGN KEY ([ClienteId]) REFERENCES [Clientes] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Enderecos_Usuarios_UsuarioId] FOREIGN KEY ([UsuarioId]) REFERENCES [Usuarios] ([Id])
);

CREATE TABLE [Medicamentos] (
    [IdMedicamento] int NOT NULL IDENTITY,
    [NomeMedicamento] nvarchar(max) NOT NULL,
    [Dosagem] real NOT NULL,
    [Quantidade] int NOT NULL,
    [TipoMedicamento] nvarchar(max) NOT NULL,
    [ClienteId] int NULL,
    [UsuarioId] int NULL,
    CONSTRAINT [PK_Medicamentos] PRIMARY KEY ([IdMedicamento]),
    CONSTRAINT [FK_Medicamentos_Clientes_ClienteId] FOREIGN KEY ([ClienteId]) REFERENCES [Clientes] ([Id]),
    CONSTRAINT [FK_Medicamentos_Usuarios_UsuarioId] FOREIGN KEY ([UsuarioId]) REFERENCES [Usuarios] ([Id])
);

CREATE TABLE [ItensEstoque] (
    [Id] int NOT NULL IDENTITY,
    [Quantidade] int NOT NULL,
    [MedicamentoId] int NOT NULL,
    [HospitalId] int NOT NULL,
    [ValidadeLote] datetime2 NOT NULL,
    [DataAtualizacao] datetime2 NOT NULL,
    [CodigoLote] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_ItensEstoque] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ItensEstoque_Hospitais_HospitalId] FOREIGN KEY ([HospitalId]) REFERENCES [Hospitais] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_ItensEstoque_Medicamentos_MedicamentoId] FOREIGN KEY ([MedicamentoId]) REFERENCES [Medicamentos] ([IdMedicamento]) ON DELETE CASCADE
);

CREATE TABLE [Lembretes] (
    [Id] int NOT NULL IDENTITY,
    [UsuarioId] int NOT NULL,
    [MedicamentoId] int NOT NULL,
    [HorarioInicial] time NOT NULL,
    [IntervaloHoras] int NOT NULL,
    [Ativo] bit NOT NULL,
    CONSTRAINT [PK_Lembretes] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Lembretes_Medicamentos_MedicamentoId] FOREIGN KEY ([MedicamentoId]) REFERENCES [Medicamentos] ([IdMedicamento]) ON DELETE CASCADE,
    CONSTRAINT [FK_Lembretes_Usuarios_UsuarioId] FOREIGN KEY ([UsuarioId]) REFERENCES [Usuarios] ([Id]) ON DELETE CASCADE
);

CREATE INDEX [IX_Enderecos_ClienteId] ON [Enderecos] ([ClienteId]);

CREATE INDEX [IX_Enderecos_UsuarioId] ON [Enderecos] ([UsuarioId]);

CREATE INDEX [IX_ItensEstoque_HospitalId] ON [ItensEstoque] ([HospitalId]);

CREATE INDEX [IX_ItensEstoque_MedicamentoId] ON [ItensEstoque] ([MedicamentoId]);

CREATE INDEX [IX_Lembretes_MedicamentoId] ON [Lembretes] ([MedicamentoId]);

CREATE INDEX [IX_Lembretes_UsuarioId] ON [Lembretes] ([UsuarioId]);

CREATE INDEX [IX_Medicamentos_ClienteId] ON [Medicamentos] ([ClienteId]);

CREATE INDEX [IX_Medicamentos_UsuarioId] ON [Medicamentos] ([UsuarioId]);

CREATE INDEX [IX_Usuarios_HospitalId] ON [Usuarios] ([HospitalId]);

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20260925222521_EnviandoParaBiblioteca', N'9.0.14');

COMMIT;
GO

