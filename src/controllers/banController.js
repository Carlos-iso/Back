"use strict";

const repository = require("../repositories/ban-repository");

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha Ao Precessar Requisição",
    });
  }
};

exports.post = async (req, res, next) => {
  try {
    //Se o usuário já existira
    const existingUser = await repository.getExist(req.body.phoneNumber);
    if (existingUser) {
      res.status(409).send({
        message: "Já Existe Um Usuário Banido Com Esse Número",
      });
      return;
    };
    await repository.create({
        country: req.body.country,
        ddd: req.body.ddd,
        phoneNumber: req.body.phoneNumber,
    });
    res.status(201).send({
      message: "Banido com sucesso!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: "Erro Desconhecido Tente Novamente Mais Tarde"
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(200).send({
      message: "Conta Exclúida Com Sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha Ao Excluír Conta!",
    });
  }
};